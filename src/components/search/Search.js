import React, { useState, useEffect } from 'react';
import axios from "axios";

const Search = () => {
    // term = term: ''
    // setTerm = this.setState({term: ...})

    const [term, setTerm] = useState('programming');
    const [debounceTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(term)
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceTerm,
                }
            })
            setResults(data.query.search);
        }
        search();
    }, [debounceTerm]);

    useEffect(() => {
       // axios.get('https://en.wikipedia.org/w/api.php', {
       //     params: {
       //         action: 'query',
       //         list: 'search',
       //         origin: '*',
       //         format: 'json',
       //         srsearch: term
       //     }
       // })
       //     .then(response => {
       //         let timeoutId = setTimeout(() => {
       //             if(term) {
       //                 setResults(response.data.query.search);
       //             }
       //         }, 5000);
       //     });

        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        if (term && !results.length) {
            search();
        } else {
            const timeOut = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeOut);
            }
        }
    }, [term, results.length])

    const renderedResults = results.map(result => {
        return (
            <div className='item' key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}
                       className='ui button'
                        target='_blank'>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
                </div>
            </div>
        )
    })

    return (
        <div className='ui container'>
            <div className="row">
                <div className="ui segment">
                    <div className="ui form">
                        <div className="field">
                            <label>Enter Search Term</label>
                            <input
                                className='input'
                                value={term}
                                onChange={e => setTerm(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="ui celled list">
                    {renderedResults}
                </div>

            </div>
        </div>
    )
}

export default Search;