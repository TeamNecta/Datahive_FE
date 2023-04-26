import Select from '@/components/Select';
import React, { useEffect, useState } from 'react'

const Correlation = () => {
    const [dataframe, setDataframe] = useState<any>(null);
    const [corValue, setCorValue] = useState<any>(null);
    useEffect(() => {
        try {
            const _dataframe = JSON.parse(localStorage.getItem('dataframe') || '{}');
            setDataframe(_dataframe);
        } catch (error) {
            alert("Error loading dataframe");
        }
    }, []);
    return (
        dataframe && <div className='container mx-auto p-8 h-full min-h-screen bg-gradient-to-r from-teal-900 to-emerald-800'>
            <form className='w-full max-w-lg flex flex-row gap-4' onSubmit={(e: any) => {
                e.preventDefault();
                const column = e.target[0].value;
                const formData = new FormData();
                formData.append('target_column', column);
                formData.append('action', 'check_correlation');
                formData.append('data', JSON.stringify(dataframe.data));
                
                fetch('/api/analysis', {
                    method: 'POST',
                    body: formData
                }).then((res) => res.json()).then((data) => {
                    if (data.data) {
                        setCorValue(data.dict);
                    } else {
                        alert("Error checking correlation");
                    }
                }).catch((err) => {
                    alert("Error checking correlation");
                });
            }}>
                    <h1>Correlation</h1>
                <Select data={dataframe.columns} text="Select Column" />
                <button className='btn btn-primary' type='submit'>Check</button>
            </form>
            {corValue && <div>
                <h3>Correlation Value</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Column</th>
                            <th scope="col">PSN Coefficient</th>
                            <th scope='col'>PSN Value</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Object.keys(corValue).map((key, index) => {
                                return <tr key={index}>
                                    <td>{key}</td>
                                    <td>{corValue[key][0]}
                                    </td>
                                    <td>{corValue[key][1]}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                </table>
            </div>}

        </div>
    )
}

export default Correlation