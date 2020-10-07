<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Founder extends CI_Controller {

	public function index() {
		$data['main'] = 'founder_view';
		$this->load->view('layouts/main2_view', $data);
	}

}

?>