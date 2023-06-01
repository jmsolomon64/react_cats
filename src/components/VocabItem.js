function VocabItem(props) {


    return (
        <div className="card bg-slate-200 w-full sm:w-1/2 md:w-1/4 p-4 m-2">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.partOfSpeech}</h6>
                <p className="card-text">{props.definition}</p>
                <a href={props.link} target='_blank' className="card-link btn bg-purple-700 hover:bg-purple-500 text-white">For more information</a>
            </div>
        </div>
    );
};


export default VocabItem;