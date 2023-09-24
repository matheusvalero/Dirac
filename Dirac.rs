extern crate nalgebra as na;

fn main() {
    let gamma0 = na::Matrix4::new(1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, -1.0);
    let gamma1 = na::Matrix4::new(0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0);
    let gamma2 = na::Matrix4::new(0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    let gamma3 = na::Matrix4::new(0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, -1.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0);
    let gamma_matrix = [gamma0, gamma1, gamma2, gamma3];
    let gamma_matrix = [gamma0, gamma1, gamma2, gamma3];
    
    //Elektronenmasse in MeV/c^2 (natürliche Einheiten)
    let mass = 0.511; 

    // Elektronenladung in natürlichen Einheiten
    let e = 1.0; 
    
    // Definieren Sie hier ggf. das externe Potenzial:
    
    for i in 0..4 {
        println!("Gamma{} =\n{}", i, gamma_matrix[i]);
    }
    
    println!("Teilchenmasse: {} MeV/c^2", mass);
    println!("Teilchenladung: {} natürliche Belastungseinheiten", e);
}
