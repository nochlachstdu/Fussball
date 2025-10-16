//
// Created by admin on 16.10.2025.
//

#define _WIN32_WINNT 0x0A00  // Windows 10

#include <iostream>
#include "httplib.h"

int main() {
  httplib::Server svr;

  // Eine einzige Route: GET /
  svr.Get("/", [](const httplib::Request&, httplib::Response& res) {
      res.set_content("Hello World", "text/plain");
  });

  std::cout << "Server läuft auf http://localhost:8080" << std::endl;
  svr.listen("0.0.0.0", 8080);
}
