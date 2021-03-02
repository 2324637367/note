class Node{
    constructor(data){
        this.root=this;
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
// 二叉树
class BST{
    constructor(){
        this.root=null;
    }
}
// 插入节点
// 前序遍历
function insert(data){
     let newNode=new Node(data);
     let insertNode=(node,newNode)=>{
         if(newNode.data<node.data){
             if(node.left==null){
                 node.left=newNode;
             }else{
                  insertNode(node.left,newNode)
             }
         }else{
             if(node.right==null){
                 node.right=newNode
             }else{
                 insertNode(node.right,newNode)
             }
         }
     }
     if(!this.root){
        this.root=newNode;
     }else{
         insertNode(this.root,newNode)
     }
 }

 // 中序遍历
  
 function inorder(){
     let backs = [];
     let inorderNode=(node,callback)=>{
         if(node!==null){
             inorderNode(node.left,callback);
             backs.push(callback(node.data));
             inorderNode(node.right,callback);
         }
     }
     let callback=(v)=>{
         return v
     }
     
 }