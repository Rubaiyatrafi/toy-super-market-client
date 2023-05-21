const Blogs = () => {
  return (
    <div className="mt-12 mb-12 p-10">
      <h1 className=" text-center text-3xl text-blue-800 font-bold mb-10">
        Important answers for interview
      </h1>
      <hr />
      <hr />
      <hr />
      <h1 className="mt-10 text-xl font-extrabold text-orange-700  mb-2">
        ** What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>
      <p className=" text-stone-600 mt-2 mb-2 p-5">
        A refresh token just helps you re-validate a user without them having to
        re-enter their login credentials multiple times. The access token is
        re-issued, provided the refresh token is a valid one requesting
        permission to access confidential resources.
        <br />{" "}
        <span className=" text-xl font-extrabold">
          Works of Access Token
        </span>: <br /> When a user logins in, the authorization server issues
        an access token, which is an artifact that client applications can use
        to make secure calls to an API server. When a client application needs
        to access protected resources on a server on behalf of a user, the
        access token lets the client signal to the server that it has received
        authorization by the user to perform certain tasks or access certain
        resources.
        <br />
        <span className=" text-xl font-extrabold">Works of Refresh Token</span>:
        <br />
        For security purposes, access tokens may be valid for a short amount of
        time. Once they expire, client applications can use a refresh token to
        refresh the access token. That is, a refresh token is a credential
        artifact that lets a client application get new access tokens without
        having to ask the user to log in again.
      </p>
      <h1 className="mt-10 text-xl font-extrabold text-orange-700  mb-2">
        **Compare SQL and NoSQL databases?
      </h1>
      <p className=" text-stone-600 mt-2 mb-2 p-5">
        *SQL databases are relational, and NoSQL databases are non-relational.{" "}
        <br />
        *SQL databases use structured query language (SQL) and have a predefined
        schema. <br /> *NoSQL databases have dynamic schemas for unstructured
        data. SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable. <br /> *SQL databases are table-based, while
        NoSQL databases are document, key-value, graph, or wide-column stores.{" "}
        <br /> *SQL databases are better for multi-row transactions, while NoSQL
        is better for unstructured data like documents or JSON.
      </p>
      <h1 className="mt-10 text-xl font-extrabold text-orange-700  mb-2">
        **What is express js? What is Nest JS?{" "}
      </h1>
      <p className=" text-stone-600 mt-2 mb-2 p-5">
        Express is a minimalist and flexible framework that is easy to use and
        has a large community of developers. NestJS, on the other hand, is a
        newer framework that provides additional features such as dependency
        injection, a modular architecture, and an intuitive CLI.
      </p>
      <h1 className="mt-10 text-xl font-extrabold text-orange-700  mb-2">
        **What is MongoDB aggregate and how does it work ?
      </h1>
      <p className=" text-stone-600 mt-2 mb-2 p-5">
        Aggregation is a way of processing a large number of documents in a
        collection by means of passing them through different stages. The stages
        make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline.
      </p>
    </div>
  );
};

export default Blogs;
