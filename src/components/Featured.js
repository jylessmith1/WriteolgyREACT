const Featured = () => {
    const styles = {
        featured: {

        }
    }

    return (
        <header style={styles.featured}>

            <article>
                <section>
                    <h1>Tips</h1>
                    {/* <img class="top-picture" src="Images/avoid-distractions.jpg" alt=""> */}
                    <h3>3 tips to avoid internet distractions at work</h3>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos ipsa nemo minus soluta, explicabo.
                    <div>
                        <p>John Carter</p>
                        <p>June 16, 2022</p>
                    </div>

                </section>
            </article>

            <article>
                <section>
                    <h1>Resources</h1>
                    {/* <img class="top-picture" src="Images/productivity-tools.jpg" alt=""> */}
                    <h3>7 great produtivity apps for your new IPad</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos ipsa nemo minus soluta, explicabo.</p>
                    <div>
                        <p>Sophie Moore</p>
                        <p>June 16, 2022</p>
                    </div>

                </section>
            </article>

            <article>
                <section>
                    <h1>Guide</h1>
                    {/* <img class="top-picture" src="Images/productivity-ipad.jpg" alt=""> */}
                    <h3>How to create an organized productivity plan for the year</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos ipsa nemo minus soluta, explicabo.</p>
                    <div>
                        <p>John Carter</p>
                        <p>June 16, 2022</p>
                    </div>

                </section>
            </article>

        </header >
    )
}

export default Featured