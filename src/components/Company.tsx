import React, { FC, Component, ReactElement } from 'react'
import { useState } from "react"




//🔥定义【函数组件】的写法(带上 Ts 类型的写法) ————————————————————————————————————————
interface IProps2 {
	author: string,
}

const Base:FC<IProps2> = (props:IProps2):ReactElement => {
	const str:string = '啦啦啦'
	// const num:number = 1
	const [num,SetNum] = useState(1)
	const auth:boolean = false

	return (
		<div>
			{str}
			<hr/>
			{str.length}
			<hr/>
			{(str.length) + num}
			<hr />
			{auth ? '登录' : '未登录'}
			<button onClick={ () => {SetNum(num + 1)} }>{num}</button>
		</div>
	)
}





//🔥🔥定义【类组件】（带上 TS 类型）的写法!  ————————————————————————————————————————
//🔥在调用组件时, 得给 name 赋值！！ <Company name='XXX'/> 
interface IProps {
	readonly name: string,
	address? : string,
}

export default class Company extends Component<IProps> {
  render() {
	return (
	  <>
	  	<div>{this.props.name}</div>
	  	<div>{this.props.address}</div>
	  </>
	)
  }
}



export {Base}
