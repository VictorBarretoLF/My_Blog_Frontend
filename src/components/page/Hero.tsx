export default function Hero() {
    return (
        <section className="flex justify-center flex-col  min-h-screen h-screen p-0 bg-blue-200">
            <div>
                <h1>Hi, my name is</h1>
            </div>
            <div>
                <h2 className="big-heading">Victor Barreto</h2>
            </div>
            <div>
                <h3 className="big-heading">I am building a pipeline.</h3>
            </div>
            <div>
                <p>
                    I’m a software engineer specializing in building (and occasionally designing)
                    exceptional digital experiences. Currently, I’m focused on building accessible,
                    human-centered products at{" "}
                    <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
                        Upstatement
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}
