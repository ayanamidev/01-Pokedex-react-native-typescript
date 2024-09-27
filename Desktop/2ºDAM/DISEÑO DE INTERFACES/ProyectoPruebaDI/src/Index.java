import java.io.*;
import java.nio.Buffer;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;

public class Index {
    public static void main(String[] args) {

        File ruta =new File("C:\\Users\\laura\\Desktop\\registros.txt");
        ArrayList<String> lista = new ArrayList<>();
        Alumnos listaAlumnos=new Alumnos(lista);

        if (ruta.isFile()){
            try {
                FileReader fr=new FileReader(ruta);
                BufferedReader br=new BufferedReader(fr);
                String linea;
                while ((linea=br.readLine())!=null){
                    lista.add(linea);
                }
                 listaAlumnos=new Alumnos(lista);






            } catch (FileNotFoundException e) {
                System.out.println("No hay registros.");
            } catch (IOException e) {
                System.out.println("No hay registros.");

            }


        }else {
            System.out.println("No hay registros. ");
        }
        listaAlumnos.MostrarDatos();




    }
}
