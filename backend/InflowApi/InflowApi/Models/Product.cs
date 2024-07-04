namespace InflowApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime ExpirationDate { get; set; }
        public int StockQuantity { get; set; }
        public string Category { get; set; }
        public bool Available { get; set; }
        public string ProductImage { get; set; }
    }
}
