import React from 'react'



export default function FnWithChildren(props: any) {
	//🌟children 为默认属性
	return (
		<div>{props.children}</div>
	)
}
