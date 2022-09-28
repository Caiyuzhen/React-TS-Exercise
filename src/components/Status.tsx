import React, { Component } from 'react'


interface IState {
	count: number,
}



export default class Status extends Component<any,IState>  {

	constructor(props: any, context: any) {
		super(props,context)

		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		// this.setState ({//🎃用 setState 方法修改 state ！
		// 	count: this.state.count + 1 //还是 1 , 因为 state 的更新是异步的，更新会被合并
		// })
		for(let i=0; i< 4; i++){
			console.log(i)
			//🔥🔥🔥因为 state 的更新是异步的！！所以要循环 + 1 的话, 得用回调的方式！！
			this.setState ((state)=>({//👈注意这里是个箭头函数！！
				count: state.count + i //0+1+2+3+4
				// count: state.count + 1 //0+1+2+3 //注意上下两种方式的区别，下面不包含第 4 次
			}))
		}
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.count}
				</h1>
			</div>
		)
	}
}
