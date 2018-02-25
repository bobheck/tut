using System;
using Newtonsoft.Json;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create product object
            var product1 = new Product{ID=101,Name="Red Apple", Price=1.99};

            // Serialize the product object to JSON
            var jsonString = JsonConvert.SerializeObject(product1);
            System.Console.WriteLine(jsonString);

            // Deserialize the JSON string back to the product object
            var product2 = JsonConvert.DeserializeObject<Product>(jsonString);
            System.Console.WriteLine($"The product ID is {product2.ID}");
            System.Console.WriteLine($"The product Name is {product2.Name}");
            System.Console.WriteLine($"The product Price is {product2.Price}");
        }
    }

    // Create model class
    class Product 
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Price { get;set;}
        
        
    }

}
