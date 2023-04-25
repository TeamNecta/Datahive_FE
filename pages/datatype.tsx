import DataTable from '@/components/DataTable';
import Select from '@/components/Select';
import React, { useEffect, useState } from 'react';

const datatype = () => {
    const [dataframe, setDataframe] = useState<any>(null)
    useEffect(() => {
        try {
            const _dataframe = JSON.parse(localStorage.getItem('dataframe') || '{}');
            setDataframe(_dataframe);
        } catch (error) {
            alert("Error loading dataframe");
        }
    }, []);
    return (
        dataframe && <div>
            <h1>Change Datatype</h1>
            <div dangerouslySetInnerHTML={{ __html: dataframe["datatype_table"] }} />
            <form onSubmit={(e: any) => {
                e.preventDefault();
                const column = e.target[0].value;
                const datatype = e.target[1].value;
                const formData = new FormData();
                formData.append('column', column);
                formData.append('datatype', datatype);
                formData.append('action', 'change_datatype');
                formData.append('data', JSON.stringify(dataframe.data));

                fetch('/api/advance_cleaning', {
                    method: 'POST',
                    body: formData
                }).then((res) => res.json()).then((data) => {
                    if (data.data) {
                        localStorage.setItem('dataframe', JSON.stringify(data));
                        setDataframe(data);
                    } else {
                        alert("Error changing datatype");
                    }
                }).catch((err) => {
                    alert("Error changing datatype");
                });
            }}>
                <Select data={dataframe.columns} text="Select Column" />
                <Select data={["int", "float", "object"]} text="Select Datatype" />
                <button className='btn btn-primary' type='submit'>Change</button>
            </form>
        </div>
    )
}

export default datatype