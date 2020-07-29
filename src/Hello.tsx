import React from 'react'
import { render } from '@testing-library/react'

//接口中的I必须大写必须以I开头，确定标签中的属性
interface IProps{
    title: string,
    age: number
    onMyClick:any //跟父组件的交互
}
//通过接口声明状态
interface IState{
    count: number
}
//Iprops属性
//any状态
export default class Hello extends React.Component<IProps,IState>{
    public constructor(props:IProps){
        super(props)
        this.state = {
            count: 100
        }
        this.clickhandler = this.clickhandler.bind(this)
        this.clickMsghandler = this.clickMsghandler.bind(this)
    }
    //实现state
    // public readonly state: Readonly<IState> = {
    //     count:100
    // }
    public clickhandler(){
        this.setState({
            count: 200
        })
    }
    public clickMsghandler(){
        this.props.onMyClick('childmsg');
    }
    render(){
        const {title,age} = this.props
        return(
            <div>
                <div>Hello:{title}{age}</div>
                <div> {this.state.count}</div>
                <button onClick={this.clickhandler}>按钮</button>
                <button onClick={this.clickMsghandler}>给父组件传消息</button>
            </div>
        
        )
            
        
    }
}