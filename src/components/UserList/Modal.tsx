import React, { FC, ReactElement } from 'react'
import './modal.css'


//定义泛型接口
interface IProps {
	isOpen: boolean
	content? : string //⚡️⚡️父组件的 user 传入子组件成为 content!!注意这里父组件定义为 ？ 可选参数，所以子组件也需要定义为可选参数！！
	cancel: ()=> void //回调
}

/*
在定义组件时不知道props的类型，由使用该组件时传入的参数决定，就可以这么写,
TypeScript 能够跟使用时候提供的值自动推断出类型 T，无需显式指定
export default function Modal<T>(props: IProps<T>) {...}
*/

const Modal:FC<IProps> = ({isOpen, content, cancel}) : ReactElement => {

	return(
		<div>
			{/* 🔥条件渲染【isOpen】, 由【父组件传入 open】 属性, 决定是否显示模态框 */}
			{isOpen && 
				<div className="modal-background">
					<div className="Container">
						<div className="head">
							<div className="title">编辑</div>
							<div className="close"></div>
						</div>
						<div className="text-box">
							{/* 🔥 content 为由父组件传入的 user 信息！！ */}
							{content}
							<br />
							发送 API 请求，更新用户信息等...
						</div>
						<button onClick={ cancel }>取消</button>
					</div>
				</div>
			}
		</div>
	)

}


export default Modal
