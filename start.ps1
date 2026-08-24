Write-Host("Starting php...");

php -v >nul 2>&1;


# Check if php actually exists before running
if($LASTEXITCODE -ne 0){
    Write-Error("PHP is not installed on this device.");
    Exit 1;
}

$PORT = 8080;

# Run php on port 8080

Write-Host("Running Php on port $PORT, vist http://localhost:8080. CTRL+C to stop")
php -S localhost:$PORT

$exit = $LASTEXITCODE;

# Then check if php actually is successful.
if($exit -ne 0){

    Write-Error("Php failed to star at $PORT, and exited with $exit");

}