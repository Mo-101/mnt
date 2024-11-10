# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class DetectionResult(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, result_url: Object=None, format: Object=None):  # noqa: E501
        """DetectionResult - a model defined in Swagger

        :param result_url: The result_url of this DetectionResult.  # noqa: E501
        :type result_url: Object
        :param format: The format of this DetectionResult.  # noqa: E501
        :type format: Object
        """
        self.swagger_types = {
            'result_url': Object,
            'format': Object
        }

        self.attribute_map = {
            'result_url': 'result_url',
            'format': 'format'
        }
        self._result_url = result_url
        self._format = format

    @classmethod
    def from_dict(cls, dikt) -> 'DetectionResult':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The DetectionResult of this DetectionResult.  # noqa: E501
        :rtype: DetectionResult
        """
        return util.deserialize_model(dikt, cls)

    @property
    def result_url(self) -> Object:
        """Gets the result_url of this DetectionResult.

        URL to download detection results (e.g., CSV or GeoJSON).  # noqa: E501

        :return: The result_url of this DetectionResult.
        :rtype: Object
        """
        return self._result_url

    @result_url.setter
    def result_url(self, result_url: Object):
        """Sets the result_url of this DetectionResult.

        URL to download detection results (e.g., CSV or GeoJSON).  # noqa: E501

        :param result_url: The result_url of this DetectionResult.
        :type result_url: Object
        """

        self._result_url = result_url

    @property
    def format(self) -> Object:
        """Gets the format of this DetectionResult.

        The output format for the detection results.  # noqa: E501

        :return: The format of this DetectionResult.
        :rtype: Object
        """
        return self._format

    @format.setter
    def format(self, format: Object):
        """Sets the format of this DetectionResult.

        The output format for the detection results.  # noqa: E501

        :param format: The format of this DetectionResult.
        :type format: Object
        """

        self._format = format
