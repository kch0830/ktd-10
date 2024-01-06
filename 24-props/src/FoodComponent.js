// src/component/Props_ex1.js 코드입니다.
import React from "react";

const Props_ex1 = props => {
    return (
        <h1>
            제가 좋아하는 음식은 
            <span style={{color: "red"}}> {props.food}</span>
            입니다.
        </h1>
    )
}

Props_ex1.defaultProps = {
    food: "김치찌개"
};

export default Props_ex1;