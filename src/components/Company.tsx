import React, { FC, Component, ReactElement } from 'react'
import { useState } from "react"




//๐ฅๅฎไนใๅฝๆฐ็ปไปถใ็ๅๆณ(ๅธฆไธ Ts ็ฑปๅ็ๅๆณ) โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
interface IProps2 {
	author: string,
}

const Base:FC<IProps2> = (props:IProps2):ReactElement => {
	const str:string = 'ๅฆๅฆๅฆ'
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
			{auth ? '็ปๅฝ' : 'ๆช็ปๅฝ'}
			<button onClick={ () => {SetNum(num + 1)} }>{num}</button>
		</div>
	)
}





//๐ฅ๐ฅๅฎไนใ็ฑป็ปไปถใ๏ผๅธฆไธ TS ็ฑปๅ๏ผ็ๅๆณ!  โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
//๐ฅๅจ่ฐ็จ็ปไปถๆถ, ๅพ็ป name ่ตๅผ๏ผ๏ผ <Company name='XXX'/> 
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
