import React, { Component } from 'react'
import DeleteUser from './DeleteUser'
import Modal from './Modal'



//用户信息接口(export 出去，方便复用)
export interface IUser { 
	readonly id: number
	userName: string
	// run():void   	//函数接口
	// run: (id: number) => void   //箭头函数接口
}


//用户状态接口(相当于【类组件】内的【state】的类型！)
interface IState {
	userList: IUser[]  //数组类型, 存放, 用户信息
	isOpen : boolean  //🔥控制是否打开弹窗
	user? : string  //用户信息 //⚡️⚡️父组件的 user 传入子组件成为 content!!注意这里父组件定义为 ？ 可选参数，所以子组件也需要定义为可选参数！！
}




//👇这里就不特地定义 props 的类型了, 🔥🔥因为是最上游的组件, 如果定义了的话, App.js 就要给它传数据了, 因此就定义为 any
export default class UserList extends Component<any, IState> {
	
	constructor(props: any){
		super(props)
		this.state = {
			userList: [],
			isOpen: false,
		}
	}


	//⚡️生成用户数据, componentDidMount() 是同步函数, 只渲染一次, 完全等价于useLayoutEffect( fn , [ ] ), 但是不等价于useEffect( fn , [ ] )
	componentDidMount() {
		let userList2:IUser[] = [] //定义空数组, 避免 state 异步更新的问题！！

		for (let id=1 ; id<=10; id++){
			userList2.push({//把数据传入数组
				id: id,
				userName:'userName' + id
			})
		}
		this.setState({userList: userList2})//把遍历好的数据传入 state
	}

	//👇方法一: 不拆分组件就得在这里定义函数
	// // 弹出 dialog 提示删除成功提示的方法
	// showDialog = (msg: string) => {
	// 	alert(msg)
	// }

	// //删除列表的方法
	// deleteUser = (user: IUser) => { //⚡️传入 user ，数据类型为 IUser 
	// 	// console.log(user) //拿到对应的 user 
	// 	setTimeout(() => { //🔌模拟调接口
	// 		this.setState((state)=>({
	// 			userList: state.userList.filter( u => user.id !== u.id ) //filter, true 保留, false 去除, 过滤掉不等于这条 id 的内容
	// 		}))
	// 		this.showDialog('删除成功')
	// 	},200)
	// }


	//👇方法二: 把真正的删除方法写在子组件, 父组件把【user】传给子组件, 然后接收子组件的【回调函数】！！
	deleteUser = (user: IUser) => { //⚡️因为闲的渲染要传入【user】, 所以这里定义 TS 类型为 IUser 
		// console.log(user) //拿到对应的 user	
		this.setState((state)=>({
			userList: state.userList.filter( u => user.id !== u.id ) //filter, true 保留, false 去除, 过滤掉不等于这条 id 的内容
		}))
		alert('删除成功')
	}



	//打开弹窗的方法！onClick 后先把 state 内的 isOpen 改为 true, 然后再传给 Modal 组件
	//🔥🔥打开弹窗本质是改变状态！
	openModal = (user: IUser) => {
		this.setState((state)=>({
			isOpen: !state.isOpen
		}))
		this.setState((state)=>({
			user: user.userName //🔥🔥获取当前点击的用户名!!因为下面的 table 遍历出了 user， 所以能拿到!!相当于一层层传递给子组件!!
		}))
	}


	//🔥🔥关闭弹窗本质是改变状态！
	cancel = () => {
		this.setState((state)=>({
			isOpen: !state.isOpen 
		}))
	}


	render() {
		return (
			<>	
				{/* ⚡️⚡️父组件的 user 传入子组件成为 content!!注意这里父组件定义为 ？ 可选参数，所以子组件也需要定义为可选参数！！ */}
				<Modal isOpen={ this.state.isOpen } content={this.state.user} cancel={this.cancel}/>
				{/* 渲染表格 */}
				<table>
					{/* 表格标题, 不参与循环渲染 */}
					<thead>
						<tr>
							{/* 设置为列布局 */}
							<th colSpan={1}>The table header</th>
						</tr>
					</thead>
					
					<tbody>
						{/* 🌟表格内容参与循环渲染 */}
						{this.state.userList.map(user => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.userName}</td>
								<td>
									{/* 👇写法一(不拆分组件化): 删除表格的按钮, ⚡️因为上面已经 map 出了 user, 所以这里能够获得 user 信息
									<button key={user.id} onClick={ ()=>{ this.deleteUser(user) } }>删除</button> */}

									{/* 👇写法二(拆分为组件化的函数) */}
									<DeleteUser user={user} deleteUser={ this.deleteUser }/>
									{/* <EditUser user={user} onClick={ this.openModal } /> */}
									{/* ⚠️注意，下面的 onClick 如果写成 this.openModal(user) 会报错！*/}
									<button onClick={ ()=>{this.openModal(user)} } >编辑</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		)
	}
}
