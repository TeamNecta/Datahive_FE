import DataTable from '@/components/DataTable';
import Select from '@/components/Select';
import React, { useEffect, useState } from 'react'

const normalize = () => {
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
        <h1>Normalize</h1>
        <DataTable dataframe={dataframe} />
        <form onSubmit={(e: any) => {
            e.preventDefault();
            const column = e.target[0].value;
            const formData = new FormData();
            formData.append('column', column);
            formData.append('action', 'normalize_data');
            formData.append('data', JSON.stringify(dataframe.data));

            fetch('/api/advance_cleaning', {
                method: 'POST',
                body: formData
            }).then((res) => res.json()).then((data) => {
                if (data.data) {
                    localStorage.setItem('dataframe', JSON.stringify(data));
                    setDataframe(data);
                } else {
                    alert("Error normalizing data");
                }
            }).catch((err) => {
                alert("Error normalizing data");
            });
        }}> 
            <Select data={dataframe.columns} text="Select Column" />
            <button className='btn btn-primary' type='submit'>Normalize</button>
        </form>
    </div>
  )
}

export default normalize