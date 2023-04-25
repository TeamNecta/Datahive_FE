import React from 'react'

type DataTableProp = {
    dataframe: any
}

const DataTable = (props: DataTableProp) => {
    const { dataframe } = props;
    return (
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 mb-16">
            <div dangerouslySetInnerHTML={{ __html: dataframe.table }} />
        </div>
    )
}

export default DataTable