import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Base2} from './components/CaseExercise';
import CourseList from './components/CourseList'
import Company,{Base} from './components/Company'
import FnWithChildren from './components/FnWithChildren'
import UserList from './components/UserList'


function App() {
	/* 快捷键
		rfc 快速创建函数组件
		rcc 快速创建类组建
	*/
	return (
	<div className="App">
		{/* 🔥接口规定需要传入 author */}
		<Base author="Zen"/>
		<Base2/>
		<CourseList/>

		{/* 🔥接口规定需要传入 name， {} 会先解析再赋值 */}
		<Company name="Slack" address="这是一个地址"/>
		<Company name={"Adobe"}/>

		{/* 标签下是有字组件的, 放文字的话默认为文本 */}
		<FnWithChildren>这是一个 Children Props</FnWithChildren>


		<UserList/>
	</div>
  );
}

export default App;
