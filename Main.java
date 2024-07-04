----------------------------377622390598407902344718
Content-Disposition: form-data; name=""; filename="Main.java"
Content-Type: text/x-java-source

class Anup{

 private int x;
 int y;

  void fun1(){
System.out.println("i am fun 1");
}

 void fun2(){
System.out.println("i am a fun 2");
}
}



class Main{
 public static void main(String [] args){
 System.out.println("Hello Anup");
Anup A1=new Anup();
Anup A2=new Anup();
A1.fun1();
System.out.println(A2.y);
A2.y=8;
System.out.println(A2.y);
}
}
----------------------------377622390598407902344718--
