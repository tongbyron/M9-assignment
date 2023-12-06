async function fetchEmployees() {
    try {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = '../../data/employees.json'; 
        const url = proxy + api;
        
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
            }
        });
        const employees = await response.json();
        return employees;
    } catch (error) {
        console.error(error);
    }
}