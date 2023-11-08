import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";

const Blogs = () => {
    return (
        <ContentCenter>
            <div className="max-w-screen-xl mx-auto p-8">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 md:pr-8">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-4">Understanding Access and Refresh Tokens</h1>
                            <p className="text-gray-500">Posted on November 4, 2023</p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">What is an Access Token and Refresh Token?</h2>
                            <p className="text-gray-600">
                                Access tokens and refresh tokens are essential components of authentication and authorization mechanisms in modern web applications.
                                They play a crucial role in ensuring secure and efficient communication between clients and servers.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">How do they work?</h2>
                            <p className="text-gray-600">
                                Access tokens are short-lived tokens that grant access to specific resources or services on behalf of a user.
                                They are often used to access APIs, and their validity typically expires after a short period to enhance security.
                                Refresh tokens, on the other hand, are long-lived tokens that are used to obtain new access tokens without the need for the user to re-enter their credentials.
                                When an access token expires, the client can use a refresh token to request a new access token, thus providing a seamless user experience.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Where should we store them on the client-side?</h2>
                            <p className="text-gray-600">
                                Storing access tokens and refresh tokens on the client-side should be done with caution. It's essential to protect them from potential security risks.
                                Common approaches include storing them in HTTP cookies with the HttpOnly and Secure flags or using browser storage mechanisms like localStorage or sessionStorage.
                                However, it's crucial to follow best practices and implement additional security measures, such as Cross-Site Request Forgery (CSRF) protection, to safeguard tokens.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">What is Express.js and Nest.js?</h2>
                            <p className="text-gray-600">
                                Express.js is a minimalist web application framework for Node.js, known for its simplicity and flexibility. It's widely used to build web applications and APIs, offering routing, middleware, and a vibrant ecosystem of extensions.

                                Nest.js, on the other hand, is a progressive Node.js framework that provides a structured and opinionated approach to server-side application development. It's built on top of Express.js and emphasizes modularity, dependency injection, and scalability. Nest.js is particularly well-suited for building efficient and maintainable applications.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
                            <ul className="text-gray-600">
                                <li><Link to="/express-js">Understanding Express.js</Link></li>
                                <li><Link to="/nest-js">An Introduction to Nest.js</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </ContentCenter>
    );
};

export default Blogs;