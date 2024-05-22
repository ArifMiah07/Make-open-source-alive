import CodeSnippets from "./CodeSnippets/CodeSnippets";


const Code = () => {


    const code = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSE 1107: Discrete Mathematics Study Plan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f9;
        }
        h1 {
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #ddd;
        }
    </style>
</head>
<body>

<h1>CSE 1107: Discrete Mathematics Study Plan</h1>

<table>
    <thead>
        <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Day</th>
            <th>Topic</th>
        </tr>
    </thead>
    <tbody>
        <!-- Week 1 -->
        <tr>
            <td>1</td>
            <td>May 18</td>
            <td>Saturday</td>
            <td>Course Introduction, Overview of Discrete Mathematics</td>
        </tr>
        <tr>
            <td>1</td>
            <td>May 19</td>
            <td>Sunday</td>
            <td>Basic Concepts of Set Theory</td>
        </tr>
        <tr>
            <td>1</td>
            <td>May 21</td>
            <td>Tuesday</td>
            <td>Set Operations and Venn Diagrams</td>
        </tr>
        <tr>
            <td>1</td>
            <td>May 22</td>
            <td>Wednesday</td>
            <td>Applications of Set Theory</td>
        </tr>
        <!-- Week 2 -->
        <tr>
            <td>2</td>
            <td>May 25</td>
            <td>Saturday</td>
            <td>Introduction to Formal Logic, Propositional Logic</td>
        </tr>
        <tr>
            <td>2</td>
            <td>May 26</td>
            <td>Sunday</td>
            <td>Logical Connectives and Truth Tables</td>
        </tr>
        <tr>
            <td>2</td>
            <td>May 28</td>
            <td>Tuesday</td>
            <td>Predicate Logic and Quantifiers</td>
        </tr>
        <tr>
            <td>2</td>
            <td>May 29</td>
            <td>Wednesday</td>
            <td>Logical Equivalences and Implications</td>
        </tr>
        <!-- Week 3 -->
        <tr>
            <td>3</td>
            <td>June 1</td>
            <td>Saturday</td>
            <td>Introduction to Proofs, Direct Proofs</td>
        </tr>
        <tr>
            <td>3</td>
            <td>June 2</td>
            <td>Sunday</td>
            <td>Indirect Proofs, Proof by Contradiction</td>
        </tr>
        <tr>
            <td>3</td>
            <td>June 4</td>
            <td>Tuesday</td>
            <td>Proof by Contrapositive</td>
        </tr>
        <tr>
            <td>3</td>
            <td>June 5</td>
            <td>Wednesday</td>
            <td>Proof by Mathematical Induction</td>
        </tr>
        <!-- Week 4 -->
        <tr>
            <td>4</td>
            <td>June 8</td>
            <td>Saturday</td>
            <td>Permutations and Combinations</td>
        </tr>
        <tr>
            <td>4</td>
            <td>June 9</td>
            <td>Sunday</td>
            <td>Binomial Theorem</td>
        </tr>
        <tr>
            <td>4</td>
            <td>June 11</td>
            <td>Tuesday</td>
            <td>Pigeonhole Principle</td>
        </tr>
        <tr>
            <td>4</td>
            <td>June 12</td>
            <td>Wednesday</td>
            <td>Principle of Inclusion-Exclusion</td>
        </tr>
        <!-- Week 5 -->
        <tr>
            <td>5</td>
            <td>June 15</td>
            <td>Saturday</td>
            <td>Introduction to Recurrence Relations</td>
        </tr>
        <tr>
            <td>5</td>
            <td>June 16</td>
            <td>Sunday</td>
            <td>Solving Linear Recurrence Relations</td>
        </tr>
        <tr>
            <td>5</td>
            <td>June 18</td>
            <td>Tuesday</td>
            <td>Homogeneous Recurrence Relations</td>
        </tr>
        <tr>
            <td>5</td>
            <td>June 19</td>
            <td>Wednesday</td>
            <td>Non-Homogeneous Recurrence Relations</td>
        </tr>
        <!-- Week 6 -->
        <tr>
            <td>6</td>
            <td>June 22</td>
            <td>Saturday</td>
            <td>Introduction to Generating Functions</td>
        </tr>
        <tr>
            <td>6</td>
            <td>June 23</td>
            <td>Sunday</td>
            <td>Applications of Generating Functions</td>
        </tr>
        <tr>
            <td>6</td>
            <td>June 25</td>
            <td>Tuesday</td>
            <td>Solving Recurrence Relations Using Generating Functions</td>
        </tr>
        <tr>
            <td>6</td>
            <td>June 26</td>
            <td>Wednesday</td>
            <td>Practice Problems on Generating Functions</td>
        </tr>
        <!-- Week 7 -->
        <tr>
            <td>7</td>
            <td>June 29</td>
            <td>Saturday</td>
            <td>Introduction to Graph Theory</td>
        </tr>
        <tr>
            <td>7</td>
            <td>June 30</td>
            <td>Sunday</td>
            <td>Types of Graphs and Their Properties</td>
        </tr>
        <tr>
            <td>7</td>
            <td>July 2</td>
            <td>Tuesday</td>
            <td>Graph Traversals: BFS and DFS</td>
        </tr>
        <tr>
            <td>7</td>
            <td>July 3</td>
            <td>Wednesday</td>
            <td>Connectivity and Components</td>
        </tr>
        <!-- Week 8 -->
        <tr>
            <td>8</td>
            <td>July 6</td>
            <td>Saturday</td>
            <td>Eulerian and Hamiltonian Paths</td>
        </tr>
        <tr>
            <td>8</td>
            <td>July 7</td>
            <td>Sunday</td>
            <td>Graph Coloring</td>
        </tr>
        <tr>
            <td>8</td>
            <td>July 9</td>
            <td>Tuesday</td>
            <td>Planar Graphs and Graph Isomorphism</td>
        </tr>
        <tr>
            <td>8</td>
            <td>July 10</td>
            <td>Wednesday</td>
            <td>Applications of Graph Theory</td>
        </tr>
        <!-- Week 9 -->
        <tr>
            <td>9</td>
            <td>July 13</td>
            <td>Saturday</td>
            <td>Introduction to Finite State Machines</td>
        </tr>
        <tr>
            <td>9</td>
            <td>July 14</td>
            <td>Sunday</td>
            <td>Deterministic Finite Automata (DFA)</td>
        </tr>
        <tr>
            <td>9</td>
            <td>July 16</td>
            <td>Tuesday</td>
            <td>Non-Deterministic Finite Automata (NFA)</td>
        </tr>
        <tr>
            <td>9</td>
            <td>July 17</td>
            <td>Wednesday</td>
            <td>Equivalence of DFA and NFA</td>
        </tr>
        <!-- Week 10 -->
        <tr>
            <td>10</td>
            <td>July 20</td>
            <td>Saturday</td>
            <td>Regular Expressions and Languages</td>
        </tr>
        <tr>
            <td>10</td>
            <td>July 21</td>
            <td>Sunday</td>
            <td>Minimization of Finite State Machines</td>
        </tr>
        <tr>
            <td>10</td>
            <td>July 23</td>
            <td>Tuesday</td>
            <td>Pumping Lemma for Regular Languages</td>
        </tr>
        <tr>
            <td>10</td>
            <td>July 24</td>
            <td>Wednesday</td>
            <td>Applications of Finite State Machines</td>
        </tr>
        <!-- Week 11 -->
        <tr>
            <td>11</td>
            <td>July 27</td>
            <td>Saturday</td>
            <td>Review of Set Theory and Logic</td>
        </tr>
        <tr>
            <td>11</td>
            <td>July 28</td>
            <td>Sunday</td>
            <td>Review of Proof Techniques and Counting Methods</td>
        </tr>
        <tr>
            <td>11</td>
            <td>July 30</td>
            <td>Tuesday</td>
            <td>Review of Recurrence Relations and Generating Functions</td>
        </tr>
        <tr>
            <td>11</td>
            <td>July 31</td>
            <td>Wednesday</td>
            <td>Midterm Exam</td>
        </tr>
        <!-- Week 12 -->
        <tr>
            <td>12</td>
            <td>August 3</td>
            <td>Saturday</td>
            <td>Review of Graph Theory</td>
        </tr>
        <tr>
            <td>12</td>
            <td>August 4</td>
            <td>Sunday</td>
            <td>Review of Finite State Machines</td>
        </tr>
        <tr>
            <td>12</td>
            <td>August 6</td>
            <td>Tuesday</td>
            <td>Practice Problems and Past Papers</td>
        </tr>
        <tr>
            <td>12</td>
            <td>August 7</td>
            <td>Wednesday</td>
            <td>Advanced Topics in Discrete Mathematics</td>
        </tr>
        <!-- Week 13 -->
        <tr>
            <td>13</td>
            <td>August 10</td>
            <td>Saturday</td>
            <td>Comprehensive Review Session</td>
        </tr>
        <tr>
            <td>13</td>
            <td>August 11</td>
            <td>Sunday</td>
            <td>Practice Problems on All Topics</td>
        </tr>
        <tr>
            <td>13</td>
            <td>August 13</td>
            <td>Tuesday</td>
            <td>Mock Exam</td>
        </tr>
        <tr>
            <td>13</td>
            <td>August 14</td>
            <td>Wednesday</td>
            <td>Final Q&A Session</td>
        </tr>
        <!-- Week 14 -->
        <tr>
            <td>14</td>
            <td>August 17</td>
            <td>Saturday</td>
            <td>Final Exam Preparation</td>
        </tr>
        <tr>
            <td>14</td>
            <td>August 18</td>
            <td>Sunday</td>
            <td>Final Exam</td>
        </tr>
        <tr>
            <td>14</td>
            <td>August 20</td>
            <td>Tuesday</td>
            <td>Final Exam</td>
        </tr>
        <tr>
            <td>14</td>
            <td>August 21</td>
            <td>Wednesday</td>
            <td>Final Exam</td>
        </tr>
    </tbody>
</table>

</body>
</html>
    
    `
    return (
        <div>
            <CodeSnippets code={code}></CodeSnippets>
        </div>
    );
};

export default Code;