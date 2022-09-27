import React, { Component } from 'react'

// ⚡️用范型来定义数据类型
interface ICourse {
	readonly id: number; //readonly 表示只读属性
	title: string,
	content? : string | number,  //？表示可选项  | 表示联合类型
	[propName: string] : any //让继承这个【接口】的对象可以添加额外属性, 🔥注意, 任意属性一定得是 any！
}





// 不定义 CourseList 类型的写法
export default class CourseList extends Component {

	//定义课程数据，用接口来规范数据类型
	courseList:ICourse[] = []

	//初始化课程数据时，记得放在 constructor 构造函数中
	public constructor(props: any){
		super(props)//🔥很关键！

		this.courseList.push({
			id: 1,
			title: 'Typescript 课程',
		} as ICourse) //用 as ICourse 来强制定义类型

		this.courseList.push({
			id: 2,
			title: 'Next.js 课程',
		} as ICourse) //用 as ICourse 来强制定义类型
	}


	//生命周期, 组件有更新时渲染，会晚于 constructor 构造函数！(🔥不能写在这里，因为 componentDidMount 🔥【没有更新状态】的话，不会重新渲染页面)
	componentDidMount() {
	}


	render() {
	return (
		<div>
			<ul>
				{
					this.courseList.map(course => (
						<li key={course.id}>{course.title}</li>							
					))
				}
			</ul>
		</div>
	)
	}
}
