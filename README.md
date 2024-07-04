# Inflow

## Descripción

The "Inflow" project is a web application designed to manage inventories efficiently. It uses Angular on the frontend to offer a modern and responsive interface, leveraging features like Angular Material and Reactive Forms for a seamless user experience. On the backend, .NET Core is used along with Entity Framework Core and ASP.NET Core Web API, providing a robust and scalable architecture to handle product CRUD operations, including database migrations and initial data seeding. With these technologies, Inflow facilitates effective inventory management and tracking, ideal for businesses that require detailed and updated control of their assets..<br>

<div >
<img src="frontend\inflow-inventory\public\images\list-products.png" alt="list-products" width="190"/>
<img src="frontend\inflow-inventory\public\images\creation-of-product.png" alt="creation-product" width="190"/>
<img src="frontend\inflow-inventory\public\images\edition-of-the-product.png" alt="edition-product" width="190"/>
<img src="frontend\inflow-inventory\public\images\info-of-the-product.png" alt="info-product" width="190"/>
</div>

## Index

- [Inflow](#inflow)
  - [Descripción](#descripción)
  - [Index](#index)
  - [Technologies used](#technologies-used)
  - [Functionalities](#functionalities)
  - [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Usage](#usage)
  - [QA Analysis](#qa-analysis)
  - [Contributors](#contributors)
  - [Special thanks](#special-thanks)


## Technologies used

| Frontend   | Backend   | QA & UX/UI |
| ---------- | --------- | ---------- |
| TypeScript | .NET      | Postman    |
| Angular    | SqlServer |            |
| Bootstrap  |           |            |



## Functionalities

- **Administrative Users:**
  - Product and category management.
  - Inventory maintenance and tracking.
- **General Users:**
  - View available products and related details.
  - Access advanced search and filtering functionalities.
- **Communication:**
  - Contact information for technical support and product-related inquiries

## Installation

1. Clone the repository:

```bash
    git clone git@github.com:CarlosMejia01/Inflow.git
   ```

2. Navigate to the project directory:

```bash
    cd frontend
```

3. Install frontend dependencies:

```bash
    cd inflow-directory
    npm install
```
4. Run the frontend app:
```bash
    ng serve
```

## Backend Setup

Before setting up the backend for Inflow, ensure you have the following installed:
- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Visual Studio](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or another supported database
- [DotnetEf](https://learn.microsoft.com/en-us/ef/core/cli/dotnet)

1. Open the `backend` project in your preferred IDE (Visual Studio or Visual Studio Code).

2. Update the database connection string in `appsettings.json` located in the root directory of the backend project:

   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "data source=(localdb);initial catalog=Inflow;trusted_connection=True;encrypt=false;TrustServerCertificate=true"
     }
   }

- Make sure the name of the database is *Inflow*

## Running the Backend

**Run the following commands**:

- For the creation of the database and the table.

```bash
  dotnet ef migrations add InitialCreate
  dotnet ef database update
```

1. Start the backend application by clicking the start button ("Start" or "Run") in your IDE preferably with ([Microsoft-Visual-Studio](https://visualstudio.microsoft.com/)).

2. The backend API will be hosted at `https://localhost:7283/swagger/index.html` or `https://localhost:5001/swagger/index.html` (or another port depending on your configuration).

3. Open your web browser and navigate to `https://localhost:7283/swagger/index.html` or `https://localhost:5001/swagger/index.html` to verify the backend is running correctly. Ensure the page loads without any connection errors or HTTP errors.

4. Perform local testing to confirm that all API functionalities are operational and that endpoints respond correctly to requests.


## Usage

1. Ability to list inventory products.
2. Ability to create new products.
3. Ability to edit new products.
4. Ability to have inventory on hand at all times.

## QA Analysis
*--

## Contributors 


| Developed Role     | Name and Lastname | Contact/Networks                                                                                                                                                                                                                                                                                                          |
| ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Software Developer | Carlos Mejia      | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CarlosMejia01) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlos-alberto-mejia-perez-683600206) |

## Special thanks

<p>We appreciate your comments and contributions to improve this application</p>
