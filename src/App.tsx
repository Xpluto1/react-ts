import * as React from 'react';
import Hello from './Hello'


//React.Component<Iprops>确定props的类型
export default class App extends  React.Component{
    //子组件传递
    public onMyClickHandler(data:string){
        alert(data)

    }
   
    render(){
        return(
            <div className='App'>
               <Hello title='标题' age={20} onMyClick = {this.onMyClickHandler}/>
            </div>
        )
    }

}



