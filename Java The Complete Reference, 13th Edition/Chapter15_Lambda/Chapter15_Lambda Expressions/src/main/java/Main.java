public class Main {

    public static void main(String[] args) {
        IMyNumber myNum;
        myNum = () -> 123.45;
        System.out.println(myNum.getValue());
    }
}
