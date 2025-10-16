cmake_minimum_required(VERSION 4.0)
project(Fussball)

set(CMAKE_CXX_STANDARD 23)

add_executable(Fussball main.cpp
        Server.cpp)

target_link_libraries(Fussball ws2_32)
