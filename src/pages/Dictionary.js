import {useEffect, useState} from 'react';
import VocabItem from '../components/VocabItem';


function Dictionary() {

    const [word, setWord] = useState('');
    const [foundWords, setFoundWords] = useState([]);
    const [vocabWords, setVocabWords] = useState([
        { id: 0, name: 'Purr', definition: 'A soft vibrating sound made by a cat', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/purr' },
        { id: 1, name: 'Meow', definition: 'The characteristic sound made by a cat', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/meow' },
        { id: 2, name: 'Whiskers', definition: 'Long, stiff hairs on a cat\'s face', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/whiskers' },
        { id: 3, name: 'Kitten', definition: 'A young cat', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/kitten' },
        { id: 4, name: 'Paw', definition: 'The foot of a cat', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/paw' },
        { id: 5, name: 'Scratch', definition: 'Using claws to mark or scrape', partOfSpeech: 'Verb',link: 'https://www.dictionary.com/browse/scratch' },
        { id: 6, name: 'Mew', definition: 'A soft, high-pitched sound made by a cat', partOfSpeech: 'Verb',link: 'https://www.dictionary.com/browse/mew' },
        { id: 7, name: 'Feline', definition: 'Relating to or characteristic of cats', partOfSpeech: 'Adjective',link: 'https://www.dictionary.com/browse/feline' },
        { id: 8, name: 'Tomcat', definition: 'An adult male cat', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/tomcat' },
        { id: 9, name: 'Tabby', definition: 'A cat with a distinctive coat pattern', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/tabby' },
        { id: 10,name: 'Knead', definition: 'To press and rub with the paws', partOfSpeech: 'Verb',link: 'https://www.dictionary.com/browse/knead' },
        { id: 11,name: 'Tail', definition: 'The long appendage at the rear of a cat', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/tail' },
        { id: 12, name: 'Pounce', definition: 'To spring forward suddenly, as a cat does', partOfSpeech: 'Verb',link: 'https://www.dictionary.com/browse/pounce' },
        { id: 13, name: 'Hiss', definition: 'A sharp, prolonged sound made by a cat', partOfSpeech: 'Verb',link: 'https://www.dictionary.com/browse/hiss' },
        { id: 14, name: 'Grooming', definition: 'The act of cleaning the fur with the tongue', partOfSpeech: 'Noun',link: 'https://www.dictionary.com/browse/grooming' },
      ]);

    useEffect(() => {
        if (word === '') {
            setFoundWords(vocabWords);
        } else {
            const filteredWords = vocabWords.filter((vocab) => //creates new array from filtered elements
                vocab.name.toLowerCase().includes(word.toLowerCase()) //filter for elements
            );
            setFoundWords(filteredWords); //set filtered words to foundWords state
        }
    }, [ word ]); // only looking for changes in word to avoid loops

    return(
        <>
            <form className='bg-purple-900 p-10 rounded-lg flex flex-col items-center m-auto text-white'>
                <div className="form-group">
                    <label htmlFor="inputSearchWord">Search by word:</label>
                    <input type="text" className="form-control" id="inputSearchWord" value={word}
                    onChange={(e) => {setWord(e.target.value);}}/>
                </div>
            </form>
            <div className='flex flex-wrap justify-center items-center'>
                {
                    foundWords.map((vocab) => {
                       return <VocabItem key={vocab.id} {...vocab}/>
                    })
                }
            </div>
        </>
    );
};

export default Dictionary;