import React, { Component } from 'react'

//用户信息接口
interface IUser {
	readonly id: number;
	userName: string;
	// run():void   	//函数接口
	// run: (id: number) => void   //箭头函数接口
}

//用户状态接口
interface IState {
	userList: IUser[], //数组类型, 存放, 用户信息
}




//👇这里就不特地定义 props 的类型了, 就定义为 any
export default class UserList extends Component<any, IState> {
	
	constructor(props: any){
		super(props)
		this.state = {
			userList: []
		}
	}


	//⚡️生成用户数据, componentDidMount() 是同步函数, 只渲染一次, 完全等价于useLayoutEffect( fn , [ ] ), 但是不等价于useEffect( fn , [ ] )
	componentDidMount() {
		let userList2:IUser[] = [] //定义空数组

		for (let id=1 ; id<=20; id++){
			userList2.push({//把数据传入数组
				id: id,
				userName:'userName' + id
			})
		}
		this.setState({userList: userList2})//把遍历好的数据传入 state
	}


	render() {
		return (
			<>
				{
					// 渲染表格
					<table>
						{/* 表格标题, 不参与循环渲染 */}
						<thead>
							<tr>
								{/* 设置为列布局 */}
								<th colSpan={2}>The table header</th>
							</tr>
						</thead>
						
						<tbody>
							{/* 🌟表格内容参与循环渲染 */}
							{this.state.userList.map(user => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.userName}</td>
								</tr>
							))}
						</tbody>
					</table>
					
				}
			</>
		)
	}
}
