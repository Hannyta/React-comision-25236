function Gallery() {  
    const images = [  
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8fDA%3D"  
    ];  


    return (  
        <section style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{ width: "150px", height: "150px" }} />  
            ))}  
        </section>  
    );  
}  

export default Gallery;  