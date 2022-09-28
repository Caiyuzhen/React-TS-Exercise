import React, { Component } from 'react'
import { IUser } from './UserList'





interface IProps {//🔥🔥规定了【父组件要传入什么类型的参数】！
	user: IUser,
	deleteUser: (user: IUser) => void //🔥🔥数据回调函数！回调给【🔥父组件传入的函数】, 告诉父组件说【子组件】已经删除了！！！
}




//只做为【工具类】, 所以不用 constructor 
export default class DeleteUser extends Component<IProps> {//IProps 成为组件的属性之一

	user = this.props.user

	// 弹出 dialog 提示删除成功提示的方法
	showDialog = (msg: string) => {
		alert(msg)
	}


	//删除列表的方法
	deleteUser = () => { //⚡️传入 user ，数据类型为 IUser 
		setTimeout(() => { //🔌模拟调接口, 这里边可以发送 api 请求
			// console.log(user.id)
			this.props.deleteUser(this.props.user) //把 this.props.user 【回传给父组件】,🔥🔥本质是操作了父组件的删除方法
		},200)
	}

	
	render() {
	return (
			<div>
				<button 
					key={this.props.user.id} onClick={ this.deleteUser }
					>删除</button> 
			</div>
	)}
}
