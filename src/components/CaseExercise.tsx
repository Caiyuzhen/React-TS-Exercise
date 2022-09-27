import React, { Component } from "react"



//🔥类声明组件的写法(不定义 TS 类型的写法) ————————————————————————————————————————
class Base2 extends Component {
	constructor(props: any) {
		super(props)
		this.click1 = this.click1.bind(this)//手动绑定 this
	}


	//🔥这种写法需要手动绑定 this
	click1() {
		console.log('click1')
	}

	//🔥第二种手动绑定的写法
	click2(x: string) { //接收一个字符串, string 类型
		console.log(x)
	}

	//🔥箭头函数的写法不需要手动绑定 this
	click3 = () => { 
		console.log('click3')
	}

	click4 = (x:string) => {
		console.log(x)
	}

	render() {
		return (
			<div>
				<button 
					style={{backgroundColor:'#80a6ff', border:'none', padding: '8px 24px', borderRadius:'6px'}}
					onClick={this.click1}
					>点击1</button>

				<button 
					style={{backgroundColor:'#33ffb4', border:'none', padding: '8px 24px',  borderRadius:'6px'}}
					onClick={this.click2.bind(this, '这是一个参数2')}//👈传参！
					>点击2</button>

				<button 
					style={{backgroundColor:'#f175f8', border:'none', padding: '8px 24px', borderRadius:'6px'}}
					onClick={this.click3}
						>点击3</button>
				<button 
					style={{backgroundColor:'#f8e075', border:'none', padding: '8px 24px', borderRadius:'6px'}}
					onClick={this.click4.bind(this, '这是一个参数4-1')}//👈传参！
					>点击4-1</button>
				<button 
					style={{backgroundColor:'#75daf8', border:'none', padding: '8px 24px', borderRadius:'6px'}}
					onClick={()=>{this.click4('这是一个参数4-2')}}//👈箭头函数的写法！🌟
					>点击4-2</button>
			</div>
		)
	}
}



export {Base2}