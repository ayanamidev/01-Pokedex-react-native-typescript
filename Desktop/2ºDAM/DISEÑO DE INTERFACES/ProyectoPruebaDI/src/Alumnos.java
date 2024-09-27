import java.text.DecimalFormat;
import java.util.ArrayList;

public class Alumnos {

    private ArrayList<String> lista;

    private ArrayList<String> nombre;
    private ArrayList<String> edad;
    private ArrayList<String> ciudad;
    private ArrayList<Double> matNota;
    private ArrayList<Double> inglesNota;
    private ArrayList<Double> progNota;



    public Alumnos(ArrayList<String> lista) {
        this.lista = lista;

        nombre = new ArrayList<>();
        edad = new ArrayList<>();
        ciudad = new ArrayList<>();
        matNota = new ArrayList<>();
        inglesNota = new ArrayList<>();
        progNota = new ArrayList<>();

        for (String linea:lista){
            String[]datos=linea.split(";");
            nombre.add(datos[0]);
            edad.add(datos[1]);
            ciudad.add(datos[2]);
            matNota.add(Double.parseDouble(datos[3]));
            inglesNota.add(Double.parseDouble(datos[4]));
            progNota.add(Double.parseDouble(datos[5]));

        }
    }




    public void MostrarDatos(){
        for (int i=0;i<lista.size();i++){

            System.out.println(nombre.get(i));
            System.out.println(edad.get(i)+" años "+"("+ciudad.get(i)+")");
            System.out.println("M: "+matNota.get(i)+" I: "+inglesNota.get(i)+" P: "+progNota.get(i));
            Double  media=Math.round((matNota.get(i)+inglesNota.get(i)+progNota.get(i)) / 3 * 10.0) / 10.0;

            if (media<5){
                System.out.println("INSUFICIENTE: "+media);
            } else if (media>=5&&media<6) {
                System.out.println("SUFICIENTE: "+media);
                
            } else if (media>=6&&media<7) {
                System.out.println("BIEN: "+media);

            } else if (media>=7&&media<9) {
                System.out.println("NOTABLE: "+media);
            }else if(media>=9) {
                System.out.println("SOBRESALIENTE: "+media);
            }

            System.out.println("--------------------");


        }

    }
    public Double MediaTotal(){
        Double mediaMat=0.0;
        for (Double elemento:matNota){
            mediaMat+=elemento;
            

        }

    }


}
