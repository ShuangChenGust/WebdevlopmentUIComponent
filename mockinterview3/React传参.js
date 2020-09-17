//parent to child:
class Parents extends Component {
    //构造函数
   constructor() {
     super();
     // 设置state
     this.state = {
       price: 0
     };
   }
 
 clickGoods(e) {
     //更新state
     this.setState({
         price: e
     });
 }
 
 
   // 渲染
   render() {
     let { price } = this.state;
     return (
       <div>
         <button onClick={this.clickGoods1.bind(this)}>goods1</button>
         <button onClick={this.clickGoods2.bind(this)}>goods2</button>
         // 父组件中
         <Child price={price} />
       </div>
     );
   }
 }
 
 class Child extends Component {
    render() {
    {/*这里从props中拿到*/}
      return <div> price: {this.props.price} </div>;
    }
  }


  //children to parent:

  class Parents extends Component {
    constructor() {
      super();
      this.state = {
        price: 0
      };
    }
  
    getItemPrice(e) {
      this.setState({
        price: e
      });
    }
  
    render() {
      return (
        <div>
          <div>price: {this.state.price}</div>
          {/* 向子组件中传入一个函数  */}
          <Child getPrice={this.getItemPrice.bind(this)} />
        </div>
      );
    }
  }
  
  Children component:
  class Child extends Component {
    clickGoods(e) {
      // 在此函数中传入值
      this.props.getPrice(e);
    }
  
    render() {
      return (
        <div>
          <button onClick={this.clickGoods.bind(this, 100)}>goods1</button>
          <button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>
        </div>
      );
    }
  }
  
//   发布者与订阅者模式（context）
//   React 的props都是由父组件传递给子组件的，一旦遇到孙组件，就需要一层层的传递下去。而context提供了一种组件之间通讯的新的方式（16.3版本之后），可以共享一些数据，其它的组件都能从context中读取数据（类似于有个数据源，组件可以订阅这个数据源）。
  
const PriceContext = React.createContext('price')

<PriceContext.Provider value={100}>
</PriceContext.Provider>

// 创建Context
const PriceContext = React.createContext('price')
// A组件中
class ClassA extends Component {
  constructor(){
    super()
    this.state={
      price:0
    }
  }
  // 点击按钮事件
  clickGoods(e) {
    this.setState({
      price:e
    })
  }
  render(){
    const { price } = this.state
    return(
      // Provider
      // 把state里price转到Provider的value中
    <PriceContext.Provider value={price}>
        <button onClick={this.clickGoods.bind(this, 100)}>goods1</button>
        <button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>
        <ClassB />
    </PriceContext.Provider>  
    )
  }
}
// 组件B
class ClassB extends Component {
  // 组件B中只是引用了ClassC，没有进行传值的操作
  render(){
    return(
      <div><span>price:</span><span><ClassC /></span></div>
    )
  }
}
// 组件C
class ClassC extends Component {
  render(){    
    return(
      // Consumer,注意Consumer的下面要包含一个函数
      <PriceContext.Consumer>
        {
          price=><span>{price}</span>
        }
      </PriceContext.Consumer>
    )
  }
}