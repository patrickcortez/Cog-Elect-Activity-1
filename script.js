async function LoadData(){ // async function
    // Handle loading data to table.

    
   let table =  document.getElementById("tb_data"); // grab table, so we can insert table rows

    if(table == null){
        console.log("Table doesn't exist!")
        return 1;
    }

    try{

        let response = await fetch('BackEnd/sql.php');

        let data = await response.json();

        

        if(data.error){
            console.log("DB Error: "+data.error);
        }

        console.log(data.object);

        let arr = data.object;
        console.log(typeof(arr));

        let nrow = table.insertRow();
        let ncell = nrow.insertCell();

        ncell.innerHTML = data.object;
        console.log("Data loaded!")
        return 0;

    }catch(error){
        console.log(error.message);
        return 1;
    }


}

LoadData();