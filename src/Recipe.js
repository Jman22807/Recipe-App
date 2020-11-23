import React from 'react';
import style from './recipe.module.css';

// const num = 123; //> type number 123
// const str = num.toString(); //> type string "123"

// let string = "1";
// let num = parseInt(string);
//num will equal 1 as a int

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ingredients) => (
					<li>{ingredients.text}</li>
				))}
			</ol>
			<p>{calories} Cal.</p>
			<img className={style.image} src={image} alt="" />
		</div>
	);
};

export default Recipe;
