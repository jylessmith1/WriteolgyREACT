const Hero = () => {
    const styles = {
        hero: {
            display: 'flex',
            backgroundColor: "black",
            minHeight: '280px',
            flexDirection: 'column',
            justifyContent: 'end',
            color: 'white',
            borderRadius: '5%',
            width: '285px'
        },
    }

    const styling = {
        articleInfo: {
            backgroundColor: 'grey',
            width: 'fitContent',
            borderRadius: '5px',
            displayContent: 'flex',
            justifyContent: 'spaceEvenly'

        },
    }


return (
    <section>

        <hero style={styles.hero}>
            <div>TIPS</div>
            <h3>5 ways to improve your digital project management</h3>
{/* edit to make show right styling format */}
            <articleInfo styling={styling.articleInfo}>
                <p>John Carter</p>
                <p>🕓June 16, 2022</p>
            </articleInfo>

        </hero>

        <article>
            <h5>Tips</h5>
            <h4> How to choose the best management softwatre</h4>
            <hr></hr>
        </article>

        <article>
            <h5>Tips</h5>
            <h4> 3 tips to avoid internet distractions at work</h4>
            <hr></hr>
        </article>

        <article>
            <h5>Resources</h5>
            <h4> 7 great prouctivity apps for your new IPad</h4>
            <br></br>
        </article>

    </section>
)
   }


export default Hero