import React from "react";

class Search extends React.Component {
    state = {
        allDogsArr: [],
    };

    componentDidMount() {
        fetch("/allDogs").then(function (res) {
            return res.json();
        }).then((json) => {
            this.setState({ allDogsArr: json })
        });
    };


    render() {
        let len = this.state.allDogsArr.length;
        let arr1 = [];
        for (let i = 0; i < len; i++) {
            arr1.push(this.state.allDogsArr[i]["animal"]);
        }
        console.log(arr1);

        let uniqueDogsTypeObjects = [];

       for(let i = 0 ; i < arr1.length ; i++){
           let petCategory = arr1[i];
           while()
       }

        return (

            <div className="row">
                <div className="col-4 p-4">
                    {/* Search */}
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                        />
                    </div></div>


                <div className="col-2 p-4">
                    <button type="button" class="btn btn-primary mb-4"
                        onClick={() => {
                            let input = document.querySelector("input");

                            console.log(input.value);
                        }}>Submit</button>
                </div>

                <div className="col-2 p-4">

                    {/* DropDown */}
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => {

                        }}>
                            Dropdown link
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {arr.map((el) => {
                                <li><a class="dropdown-item" href="#">{el.animal}</a></li>
                            })}

                        </ul>
                    </div>
                </div>
                <div className="col-2 p-4">

                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>



                <br></br>

            </div>
        );
    }
}


export default Search;
