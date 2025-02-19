<?php
 if(isset($_GET['q'])){
    $q = $_GET['q'];
    $mails = [
        [
            "id" => 1,
            "name" => "Karen Miller",
            "message" => "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
            "date" => "2 weeks ago",
            "time" => "10:30 AM",
            "image" => "https://storage.googleapis.com/a1aa/image/h5eWwWjSEEAgqMOQsRTUyWmik3_mLWqCWmsz0Gb6ZmQ.jpg"
        ],
        [
            "id" => 2,
            "name" => "John Doe",
            "message" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "date" => "1 week ago",
            "time" => "2:15 PM",
            "image" => "https://storage.googleapis.com/a1aa/image/vuCGLtDTcgOsOjEo1udSJjnetmpniqrXiBJ-1TJpdIs.jpg"
        ],
        [
            "id" => 3,
            "name" => "Emily Johnson",
            "message" => "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "date" => "3 days ago",
            "time" => "9:00 AM",
            "image" => "https://storage.googleapis.com/a1aa/image/bKZR7_ecCOSXp7ehPVFj7GJWF6zxavOKmbB-QuT-zCQ.jpg"
        ],
        [
            "id" => 4,
            "name" => "Michael Smith",
            "message" => "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "date" => "Yesterday",
            "time" => "4:45 PM",
            "image" => "https://storage.googleapis.com/a1aa/image/qU7yHmV6snukPmENwKcb1TeilPPhstBOqPLGSS-WaVU.jpg"
        ],
        [
            "id" => 5,
            "name" => "Sarah Brown",
            "message" => "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "date" => "Today",
            "time" => "11:00 AM",
            "image" => "https://storage.googleapis.com/a1aa/image/9roMnT2WXtsh7fenff8aJmhuBtZQZ2JZ-8EmtTkKRNI.jpg"
        ]
        ];
        $response = array('status'=>'success', 'data'=>$mails);
        echo json_encode($response);
        
 }else{
    $response = json_encode(array('status'=>'failed', 'data'=>'No query provided'));
    echo $response;
 }
?>
