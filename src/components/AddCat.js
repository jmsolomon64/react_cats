import React, {useState} from 'react';
import FavoriteColor from './utility/FavoriteColor';

function AddCat(props){

    const [img, setImg] = useState('https://google.com');
    const [name, setName] = useState('Big the Cat');
    const [furPattern, setFurPattern] = useState('Purple with a white tummy');
    const [favoriteColor, setFavoriteColor] = useState('Green');

    function getFavColor(color) {
        setFavoriteColor(color);
    }

    return (
        <>
            <button type="button" className="btn bg-purple-800 hover:bg-purple-600 text-white" data-toggle="modal" data-target="#addCatModal">
            Add A Cat!
            </button>

            <div className="modal fade" id="addCatModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit {name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => {
                                e.preventDefault(); //stop refresh
                                props.addCat(img, name, furPattern, favoriteColor);
                                setImg('');
                                setName('');
                                setFurPattern('');
                                setFavoriteColor('');
                            }}>
                                <div className="form-group">
                                    <label for="inputName">Profile Picture</label>
                                    <input type="text" className="form-control" id="inputImg" aria-describedby="imgHelp" value={img} onChange={(e) => {setImg(e.target.value);}}/>
                                    <small id="nameHelp" className="form-text text-muted">The profile picture of the cat goes here!</small>
                                </div>
                                <div className="form-group">
                                    <label for="inputName">Name</label>
                                    <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" value={name} onChange={(e) => {setName(e.target.value);}}/>
                                    <small id="nameHelp" className="form-text text-muted">The name of the cat goes here!</small>
                                </div>
                                <div className="form-group">
                                    <label for="inputFurPattern">Fur Pattern</label>
                                    <input type="text" className="form-control" id="inputFurPattern" value={furPattern}
                                    onChange={(e) => {setFurPattern(e.target.value);}}/>
                                </div>
                                <div className="form-group">
                                    <FavoriteColor getFavColor={getFavColor} favoriteColor={favoriteColor}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary bg-purple-800 hover:bg-purple-600 text-white" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary bg-purple-800 hover:bg-purple-600 text-white">Save changes</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCat;