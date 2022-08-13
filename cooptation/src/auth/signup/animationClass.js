let myCvFile = document.getElementById('fileCv') ;

class animation {
    static animateCvFile() {
        console.log('fucntion ready')
        myCvFile.addEventListener('click', () => {
            console.log('clicked')
        })
    }
}

export default animation