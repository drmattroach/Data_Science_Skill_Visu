var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    //If a node in this JSON structure
    //has the "$type" or "$dim" parameters
    //defined it will override the "type" and
    //"dim" parameters globally defined in the
    //RGraph constructor.
    var json = [{
        "id": "Fundamentals",
        "name": "1. Fundamentals",
        "data": {
            "$dim": 10.0,
            "$color":"#6500fe",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Metrics & Linear Algebra Fundamentals",
            "data": {
                "$color":"#6500fe",
                "weight": 3
            }
        }, {
            "nodeTo": "Hash Functions, Binary Tree, O(n)",
            "data": {
                "$color":"#6500fe",
                "weight": 3
            }
        }, {
            "nodeTo": "Relational Algebra, DB Basics",
            "data": {
            	"$color":"#6500fe",
                "weight": 3
            }
        }, {
            "nodeTo": "Inner, Outer, Cross, Theta Join",
            "data": {
                "$color":"#6500fe",
                "$dim":25,
                "weight": 1
            }
        }, {
            "nodeTo": "CAP Theorem",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Tabular Data",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Entropy",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Frames & Series",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Sharding",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "OLAP",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Multidimensional Data Model",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Extract/Transform/Load(ETL)",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Reporting vs BI vs Analytics",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "JSON & XML",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "NoSQL",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Regex",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Vendor Landsacpe",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }, {
            "nodeTo": "Env Setup",
            "data": {
            	"$color":"#6500fe",
                "weight": 1
            }
        }]
    }, {
        "id": "DataScienceSkills",
        "name": "Data Science Skills",
        "data": {
            "$dim": 13.077119090372014,
            "$type": "square",
            "$color":"#777777",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Fundamentals",
            "data": {
                "$color":"#6500fe",
                "weight": 5
            }
        }, {
            "nodeTo": "Statistics",
            "data": {
                "$color":"#00b0f0",
                "weight": 5
            }
        }, {
            "nodeTo": "Programming",
            "data": {
            	"$color":"#789440",
                "weight": 2
            }
        }, {
            "nodeTo": "MachineLearning",
            "data": {
            	"$color":"#cbcb00",
                "weight": 2
            }
        }, {
            "nodeTo": "TextMiningNLP",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 2
            }
        }, {
            "nodeTo": "DataVisualization",
            "data": {
            	"$color":"#ff0000",
                "weight": 2
            }
        }, {
            "nodeTo": "BigData",
            "data": {
            	"$color":"#ff3299",
                "weight": 2
            }
        }, {
            "nodeTo": "DataIngestion",
            "data": {
            	"$color":"#00b050",
                "weight": 2
            }
        }, {
            "nodeTo": "DataMunging",
            "data": {
            	"$color":"#cc66ff",
                "weight": 2
            }
        },  {
            "nodeTo": "Toolbox",
            "data": {
            	"$color":"#9c4a09",
                "weight": 2
            }
        }]
    }, {
        "id": "Statistics",
        "name": "2. Statistics",
        "data": {
            "$dim": 10.0,
            "$color":"#00b0f0",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Pick a Dataset (UCI Repo)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 3
            }
        }, {
            "nodeTo": "Descriptive Statistics(mean, median, range, SD, Var)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Exploratory Data Analysis",
            "data": {
            	"$color":"#00b0f0",
                "weight": 3
            }
        }, {
            "nodeTo": "Histograms",
            "data": {
            	"$color":"#00b0f0",
                "weight": 3
            }
        }, {
            "nodeTo": "Percentiles & Outliers",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Probability Theory",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Bayes Theorem",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Random Variables",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Cumulative Distribution Function (CDF)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Continuous Distributions (Normal, Poisson, Gaussian)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Skewness",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Analysis of Variance (ANOVA)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Probability Density Function (PDF)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Central Limit Theorem",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Monte Carlo Method",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Hypothesis Testing",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "p-Value",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Chi-square Test",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Estimation",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Confidence Interval (CI)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Maximum Likelihood Estimation (MLE)",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Kernel Density Estimate",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Regression",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Covariance",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Correlation",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Pearson Coeff",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Causation",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Least Squares Fit",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }, {
            "nodeTo": "Euclidean Distance",
            "data": {
            	"$color":"#00b0f0",
                "weight": 1
            }
        }]
    }, {
        "id": "Programming",
        "name": "3. Programming",
        "data": {
            "$dim": 10.0,
            "$color":"#789440",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Python Basics",
            "data": {
            	"$color":"#789440",
                "weight": 3
            }
        }, {
            "nodeTo": "Working in Excel",
            "data": {
            	"$color":"#789440",
                "weight": 3
            }
        }, {
            "nodeTo": "R Setup, R Studio",
            "data": {
            	"$color":"#789440",
                "weight": 3
            }
        }, {
            "nodeTo": "R Basics",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Expressions",
            "data": {
            	"$color":"#789440",
                "weight": 3
            }
        }, {
            "nodeTo": "Variables",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "IBM SPSS, Rapid Miner",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Vectors",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Matrices",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Arrays",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Factors",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Lists",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Frames",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Reading CSV Data",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Reading RAW Data",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Subsetting Data",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Manipulate Data Frames",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Functions",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Factor Analysis",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }, {
            "nodeTo": "Install Pkgs",
            "data": {
            	"$color":"#789440",
                "weight": 1
            }
        }]
    }, {
        "id": "MachineLearning",
        "name": "4. Machine Learning",
        "data": {
            "$dim": 10.0,
            "$color":"#cbcb00",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "What is ML?",
            "data": {
            	"$color":"#cbcb00",
                "weight": 1
            }
        }, {
            "nodeTo": "Numerical Var",
            "data": {
            	"$color":"#cbcb00",
                "weight": 1
            }
        }, {
            "nodeTo": "Categorical Variable",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Supervised Learning",
            "data": {
            	"$color":"#cbcb00",
                "weight": 1
            }
        }, {
            "nodeTo": "Unsupervised Learning",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Concepts, Inputs & Attributes",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Training & Test Data",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Classifier",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Prediction",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Lift",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Overfitting",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Bias & Variance",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Trees & Classification",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Classification, Classification Rate",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Decision Trees",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Boosting",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Naïve Bayes Classifiers",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "K-Nearest Neighbor",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Logistic Regression",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Regression, Ranking",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Linear Regression",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Perceptron",
            "data": {
            	"$color":"#cbcb00",	
                "weight": 3
            }
        }, {
            "nodeTo": "Clustering, Hierarchical Clustering",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "K-means Clustering",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Neural Networks",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Sentiment Analysis",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Collaborative Filtering",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }, {
            "nodeTo": "Tagging",
            "data": {
            	"$color":"#cbcb00",
                "weight": 3
            }
        }]
    }, {
        "id": "TextMiningNLP",
        "name": "5. Text Mining / NLP",
        "data": {
            "$dim": 10.0,
            "$color":"#ea6f0c",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Corpus",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 1
            }
        }, {
            "nodeTo": "Named Entity Recognition",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 1
            }
        }, {
            "nodeTo": "Text Analysis",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 1
            }
        }, {
            "nodeTo": "UIMA",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Term Document Matrix",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Term Frequency & Weight",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Support Vector Machines",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Association Rules",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Market Based Analysis ( Market Basket Analysis ? )",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Feature Extraction",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Using Mahout",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Using Weka",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Using Natural Language Toolkit (NLTK)",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Classify Text ( Document Classification? )",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }, {
            "nodeTo": "Vocabulary Mapping",
            "data": {
            	"$color":"#ea6f0c",
                "weight": 3
            }
        }]
    }, {
        "id": "DataVisualization",
        "name": "6. Data Visualization",
        "data": {
            "$dim": 10.0,
            "$color":"#ff0000",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Data Exploration in R (Hist, Boxplot etc)",
            "data": {
            	"$color":"#ff0000",
                "weight": 1
            }
        }, {
            "nodeTo": "Uni, Bi & Multivariate Viz",
            "data": {
            	"$color":"#ff0000",
                "weight": 1
            }
        }, {
            "nodeTo": "Histogram & Pie (Uni)",
            "data": {
            	"$color":"#ff0000",
                "weight": 1
            }
        }, {
            "nodeTo": "Tree & Tree Map",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "Scatter Plot (Bi)",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "Line Charts (Bi)",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "Spatial Charts",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "Survey Plot",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "Timeline",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "Decision Tree",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "D3.js",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "InfoVis",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "IBM ManyEyes",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }, {
            "nodeTo": "Tableau",
            "data": {
            	"$color":"#ff0000",
                "weight": 3
            }
        }]
    }, {
        "id": "BigData",
        "name": "7. Big Data",
        "data": {
            "$dim": 10.0,
            "$color":"#ff3299",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Map Reduce Framework",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Hadoop Components",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "HDFS",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Replication Principles",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Setup Hadoop ( IBM / Cloudera / HortonWorks )",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Name & Data Nodes",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Job & Task Tracker",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "M/R Programming",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Sqoop : Loading Data in HDFS",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Flume, Scribe : For Unstructured Data",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "SQL with Pig",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "DWH with Hive",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Scribe, Chunkwa For Weblog",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Using Mahout",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Zookeeper, Avro",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Storm : Hadoop Realtime",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Rhadoop, RHIPE",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "rmr",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "Cassandra",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }, {
            "nodeTo": "MongoDB, Neo4j",
            "data": {
            	"$color":"#ff3299",
                "weight": 1
            }
        }]
    }, {
        "id": "DataIngestion",
        "name": "8. Data Ingestion",
        "data": {
            "$dim": 10.0,
            "$color":"#00b050",
            "some other key": "some other value"
        },
       "adjacencies": [{
            "nodeTo": "Summary of Data Formats",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Discovery",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Sources & Acquisition",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Integration",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Fusion",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Transformation, Enrichment",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Survey",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Google OpenRefine",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "How much Data?",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }, {
            "nodeTo": "Using ETL",
            "data": {
            	"$color":"#00b050",
                "weight": 1
            }
        }]
    },{
        "id": "DataMunging",
        "name": "9. Data Munging",
        "data": {
            "$dim": 10.0,
            "$color":"#cc66ff",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "Dimensionality & Numerosity Reduction",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Normalization",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Data Scrubbing",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Handling Missing Values",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Unbiased Estimators",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Binning Sparse Values",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Feature Extraction",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Denoising",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Sampling",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Stratified Sampling",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }, {
            "nodeTo": "Principal Component Analysis",
            "data": {
            	"$color":"#cc66ff",
                "weight": 1
            }
        }]
    }, {
        "id": "Toolbox",
        "name": "10. Toolbox",
        "data": {
            "$dim": 10.0,
            "$color":"#9c4a09",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "MS Excel Analysis ToolPak",
            "url":"http://www.drmattroach.com",
            "data": {
            	"$color":"#9c4a09",
                "weight": 1,
            }
        }, {
            "nodeTo": "Java, Python",
            "data": {
                "$color":"#9c4a09",
                "weight": 1
            }
        }, {
            "nodeTo": "R, R-Studio, Rattle",
            "data": {
            	"$color":"#9c4a09",
                "weight": 1
            }
        }, {
            "nodeTo": "Weka, Knime, RapidMiner",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }, {
            "nodeTo": "Hadoop Dist of Choice",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }, {
            "nodeTo": "Spark, Storm",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }, {
            "nodeTo": "Flume, Scribe, Chukwa",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }, {
            "nodeTo": "Nutch, Talend, Scraperwiki",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }, {
            "nodeTo": "Webscraper, Flume, Sqoop (Flume Dup?)",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }, {
            "nodeTo": "tm, RWeka, NLTK",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }, {
            "nodeTo": "RHIPE",
            "data": {
            	"$color":"#9c4a09",
                "weight": 3
            }
        }]
    }
    
    
    
    
    
    
    
    ];
    //end
    //init RGraph
    var rgraph = new $jit.RGraph({
      'injectInto': 'infovis',
      //Optional: Add a background canvas
      //that draws some concentric circles.
      'background': {
        'CanvasStyles': {
          'strokeStyle': '#555',
          'shadowBlur': 50,
          'shadowColor': '#ccc'
        }
      },
       //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Nodes and Edges parameters
        //can be overridden if defined in 
        //the JSON input data.
        //This way we can define different node
        //types individually.
        Node: {
            'overridable': true,
             'color': '#FFFFFF'
        },
        Edge: {
            'overridable': true,
            'color': '#cccc00'
        },
        //Set polar interpolation.
        //Default's linear.
        interpolation: 'polar',
        //Change the transition effect from linear
        //to elastic.
        //transition: $jit.Trans.Elastic.easeOut,
        //Change other animation parameters.
        duration:3500,
        fps: 30,
        //Change father-child distance.
        levelDistance: 200,
        //This method is called right before plotting
        //an edge. This method is useful to change edge styles
        //individually.
        onBeforePlotLine: function(adj){
            //Add some random lineWidth to each edge.
          //  if (!adj.data.$lineWidth) 
            //    adj.data.$lineWidth = Math.random() * 5 + 1;
        },
        
        onBeforeCompute: function(node){
          //  Log.write("centering " + node.name + "...");
            
            //Make right column relations list.
            var html = "<h4>" + node.name + "</h4><b>Related Skills:</b>";
            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
        },
        //Add node click handler and some styles.
        //This method is called only once for each node/label crated.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function () {
                rgraph.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                      //  Log.write("done");
                    }
                });
            };
            var style = domElement.style;
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            style.color = "#fff";
        },
        //This method is called when rendering/moving a label.
        //This is method is useful to make some last minute changes
        //to node labels like adding some position offset.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            var left = parseInt(style.left);
            
            if (node._depth <= 1) {
                style.fontSize = "1.0em";
                style.color = "#ccc";
            
            } else if(node._depth == 2){
                style.fontSize = "0.7em";
                style.color = "#494949";
            
            } else {
                style.display = 'none';
            }
            
            //var w = domElement.offsetWidth;
            //style.left = (left - w / 2) + 'px';
        }
    });
    //load graph.
    rgraph.loadJSON(json, 1);
    
    //compute positions and plot
    rgraph.refresh();
    //end
    rgraph.controller.onBeforeCompute(rgraph.graph.getNode(rgraph.root));
   // Log.write('done');
    
}
