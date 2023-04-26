import React, { ReactElement } from 'react'

type FeatureCardProp = {
    title: string,
    description: string,
    icon: ReactElement,
    button: string
}

const FeatureCard = (props: FeatureCardProp) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-3">
                {props.icon}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">{props.button}</button>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard