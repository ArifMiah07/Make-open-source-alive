
import BlogPost from "./BlogPost";


const Blogs = () => {
    return (
        <div data-theme="retro" >
            <h1>All Blogs</h1>
            {/* <div>
                <div className="p-4">
                    <h1 className="text-2xl font-bold">How to write <code>Hello World</code> in HTML?</h1>
                    <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
                    risus non quam luctus, a lobortis odio eleifend.
                    </p>
                </div>
            </div> */}
            <BlogPost />
        </div>
    );
};

export default Blogs;
